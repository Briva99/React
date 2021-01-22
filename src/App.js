import React from 'react'
import Language from './Language'


class App extends React.Component {
    render() {
        return (
            <div>
                <p>Daftar Soal Pilihan Ganda</p>
                <div className='soal2'>
                    <Language
                        soal='1. Siapakah Penemu Baling-baling Bambu ?'
                        type='button'
                    />
                     <Language
                        type='checkBox'
                        soal='2. Pilih dua yang benar mengenai Aqil ?'
                     />
                     <Language
                        soal='3. Ceritakan pengalaman anda ketika sedang tidur :'
                        type='essay'
                     />
                    
                </div>
            </div>
        )
    }
}
export default App;