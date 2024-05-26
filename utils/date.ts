import dayjs from 'dayjs'
import RelativeTime from 'dayjs/plugin/relativeTime'

const { extend } = dayjs
extend(RelativeTime)

/**
 * @returns {string} Formats Date str to given a dateTime format
 */
export const formatDate = (str: string | undefined, format: string | undefined = 'MMMM D, YYYY'): string =>
  dayjs(str).format(format)

/**
 * @returns {string} Get time from now
 */
export const fromNow = (str: string | number | Date | dayjs.Dayjs | null | undefined): string => dayjs(str).fromNow()

/**
 * @returns {number} Convert string to milliseconds
 */
export const toMilliseconds = (timeString: string | number = ''): number => {
  const match = timeString
    .toString()
    .toLowerCase()
    .match(/(\d+)(ms|s|m|h)?/)
  if (!match)
    return 0

  const value = Number.parseInt(match[1])
  const unit = match[2] || 'ms'

  let milliseconds
  switch (unit) {
    case 'ms':
      milliseconds = value
      break
    case 's':
      milliseconds = value * 1000
      break
    case 'm':
      milliseconds = value * 60 * 1000
      break
    case 'h':
      milliseconds = value * 60 * 60 * 1000
      break
    default:
      milliseconds = 0
  }

  return milliseconds
}
