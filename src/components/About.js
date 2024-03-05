// import React,{useState} from 'react'
import React from 'react'
export default function About(props) {

    let mystyle={
        color:props.mode==='dark'?'white':'#0f1730',
        backgroundColor:props.mode==='dark'?'#0f1730':'white',
    }
    
//    const[mystyle,setmystyle]=useState( {
//     color:'black',
//     backgroundColor:'white',
//     border:'1px solid black',
//     borderRadius:'4px'
// })
// const[btnText,setbtnText]=useState("Enable Dark Mode")

//  const toggleStyle =()=>{
//     if(mystyle.color ==='black'){
//         setmystyle({
//             color:'white',
//             backgroundColor:'black',
//             border:'1px solid white',
//             borderRadius:'4px'
//         })
//         setbtnText("Enable Light Mode")
//     }
//     else{
//         setmystyle({
//             color:'black',
//             backgroundColor:'white',
//             border:'1px solid black',
//             borderRadius:'4px'
//         })
//         setbtnText("Enable Dark Mode")
//     }
// }
    return (
        <div className="container" style={mystyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" style={mystyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong>Analyze Your Text</strong> 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>Textutils</strong> gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <strong>Free To Use</strong> 
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>TextUtils</strong> is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. I
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <strong>Browser compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This word </strong> counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <button type="button" onClick={toggleStyle} className="btn btn-primary my-4">{btnText}</button>
            </div> */}
        </div>
    )
}
