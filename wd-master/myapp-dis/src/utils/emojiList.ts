export const emojiList: EmojiState[] = [
  { id: '1', content: '{face:1}', emoji: '😄' },
  { id: '2', content: '{face:2}', emoji: '😁' },
  { id: '3', content: '{face:3}', emoji: '🙍' },
  { id: '4', content: '{face:4}', emoji: '😘' },
  { id: '5', content: '{face:5}', emoji: '😠' },
]

export function emojiToContent(content: string) {

    const test = emojiList.map(v => v.emoji).join('|') 
    const reg = new RegExp(test, 'g');

    const newContent = content.replace(reg, ($) => {
      const o = emojiList.find(v => v.emoji === $)
      return o ? o.content : $
    })
    return newContent
}


export function contentToEmoji(content: string) {
  const reg = /\{face:\d+\}/g

  const newContent = content.replace(reg, ($) => {
    const o = emojiList.find(v => v.content === $)
    return o ? o.emoji : $
  })
  return newContent
}

export interface EmojiState {
  id: string
  content: string
  emoji: string
}