import { useEffect, useRef } from 'react'
import './input.scss'

// type TInputUse = 'primary' | 'secondary';

// type TInput = {
// 	use?: TInputUse
// 	type?: string
// 	placeholder: string
// 	value: string
// 	handler: () => void
//  isFocus?: boolean
// }

const Input = ({use="primary", type = 'text', placeholder, value, handler, isFocus = false }) => {
		const inputRef = useRef(null)

		useEffect(() => {
			if (inputRef.current && isFocus) {
				inputRef.current.focus()
			}
		},[])

    return <input className='input' type={type} placeholder={placeholder} value={value} onInput={(event) => handler(event.target.value)} use={use} ref={inputRef} />
}

/*

react components:
- неуправляемые no useState
- управляемые useState

browser DOM input->(hello) localState(hello) e.target.value

*/

export default Input