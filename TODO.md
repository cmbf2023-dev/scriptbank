# WebRTC Face Verification Implementation Plan
✅ Backup verification/index.html → verification/index_backup.html (DONE)

## 1. Create Watcher Page (verification/watcher.html) ✅
- ✅ HTML with video display, chat input, instructions list  
- ✅ Input for signaling key/room ID
- ✅ WebRTC peer (answerer mode)
- ✅ Supabase realtime channel for signaling + chat
- ✅ Send instructions → streamer overlay

## 2. Update Streamer (verification/index.html)  
- [ ] Show signaling key/QR code
- [ ] WebRTC peer (offerer mode)
- [ ] Chat listener for instructions → video overlay
- [ ] Preserve recording logic
- [ ] Remove fixed timer sequence

## 2. Update Streamer (verification/index.html)  
- [ ] Show signaling key/QR code
- [ ] WebRTC peer (offerer mode)
- [ ] Chat listener for instructions → video overlay
- [ ] Preserve recording logic
- [ ] Remove fixed timer sequence

## 3. Supabase Realtime Setup
- [ ] Channel format: `webrtc-{signalingKey}` 
- [ ] Events: `webrtc-offer`, `webrtc-answer`, `webrtc-ice`, `instruction`
- [ ] Chat messages → instruction overlay on streamer

## 4. CSS Updates
- [ ] Add to css/stylesheet.css: chat UI, signaling key display, instruction overlay

## 5. Testing
- [ ] Test 2-tab P2P connection
- [ ] Test instruction → overlay
- [ ] Test recording from remote stream
- [ ] Test multi-browser

**Next Step:** Create verification/watcher.html
