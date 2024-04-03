import Button from "./Button"
import '../App.css'


const Display= ()=>{

    
    return(
        <>
        <div className="display">
            <div className="upper">
                <h1>TAYLOR SWIFT</h1>
                <h2>THE ERAS TOUR</h2>
                <h2>(TAYLOR&apos;S EDITION)</h2>

                <p>includes &quot;cardigan&quot; and four accoustic songs.</p>
                <p>now streaming on disney+.</p>

                <Button brand="Subscribe now*"/>
            </div>
        </div>
            
        </>
    )   
}

export default Display