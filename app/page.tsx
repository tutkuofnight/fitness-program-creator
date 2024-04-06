import { supabase } from '@/lib/supabase'
import { DatePicker } from 'antd';
export default async function Page() {
  const { data: todos, error } = await supabase.from('todos').insert({
    name: 'İkinci todo'
  })
  if(todos) console.log(todos)
  if(error) console.log(error)
  return (
    <>
      <DatePicker />
    </>
  )
}