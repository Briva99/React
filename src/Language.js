import React from 'react'

class Language extends React.Component {

        constructor(props){
            super(props);
            this.setState={change:false}
        }

    render() {
        let modal;
            if(this.state.change){
                modal=' '
            }
        return (
            <div className='item-soal'>
                <div className='nama-soal'>{this.props.soal}</div>
                   {modal}
                   
                   
                   
                    {/* if (type==='button'){

                    }else if(type==='checkBox'){

                    } else (type==='essy'){

                    } */}

                {/* <div className='form'>
                    <form>
                        <textarea type={this.props.type}/>
                    </form>
                </div> */}

            </div>
        )
    }
}

export default Language;