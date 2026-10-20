// Draws an emoji on the page background as a PNG home-screen icon (macOS only).
// Each page needs 180 (iPhone), 192 and 512 (Android) px, for example:
//   for s in 180 192 512; do swift scripts/icon.swift 💳 $s public/icon-cards-$s.png; done
import AppKit

let a = CommandLine.arguments
let emoji = a[1], size = CGFloat(Double(a[2])!), out = a[3]
let rep = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: Int(size), pixelsHigh: Int(size), bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false, colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: rep)
NSColor(red: 0xf4/255, green: 0xf2/255, blue: 0xee/255, alpha: 1).setFill()
NSRect(x: 0, y: 0, width: size, height: size).fill()
// Emoji at 60% so Android's maskable crop and iOS's rounded corners keep it whole.
let font = NSFont(name: "Apple Color Emoji", size: size * 0.6)!
let s = NSAttributedString(string: emoji, attributes: [.font: font])
let b = s.size()
s.draw(at: NSPoint(x: (size - b.width) / 2, y: (size - b.height) / 2))
NSGraphicsContext.restoreGraphicsState()
try! rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: out))
