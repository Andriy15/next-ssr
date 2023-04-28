import Link from 'next/link'
import { useRef, useState } from 'react'

function Index() {

    const [input, setInput] = useState<string>('')

    const inputRef = useRef<HTMLInputElement>(null)

    const handleInput = () => {
        if (inputRef.current !== null) {
            setInput(inputRef.current.value)
            console.log(inputRef.current.value)
        }
        return null
    }

    return ( 
        <>
            <h1 className='text-3xl font-bold underline'>Home Page</h1>
            <input ref={inputRef} type="text" onChange={handleInput} />
            <Link href='/posts'>Posts</Link>
            <label htmlFor="name">{input}</label>
        </>
    )
}

export default Index
