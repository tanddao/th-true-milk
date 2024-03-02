import { DUMMY_DATE_TIME_FORMAT } from '@/utils/constant'
import dayjs from 'dayjs'

export const getCurrentTime = () => {
  return dayjs().format(DUMMY_DATE_TIME_FORMAT)
}
