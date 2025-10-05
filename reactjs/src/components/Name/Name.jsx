import { useState } from 'react';

export default function Name() {
    const[name] = useState('');

    return <h1>Hello {name}</h1>;
}
