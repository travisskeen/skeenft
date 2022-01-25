import React from 'react';
import "../yakclubmain.css"

class YakMain extends React.Component{
    constructor (){
        super()
        this.state = {
            yaks: []
        }
    }
    
    componentDidMount(){
        
    }
    testMethod = ()=>{}
    render(){
        const {test}= this.props
        return(
            <div>
                <h1 id="elites">Elites</h1>
                <div class="elite-outer-container">
                    <div class="elite-container" id="eoc-1">
                        <div class="elite-nft-1"></div>
                        <h2>Yak #1</h2>
                        <p>El Primero</p>
                    </div>
                    <div class="elite-container" id="eoc-2">
                        <div class="elite-nft-2"></div>
                        <h2>Yak #2</h2>
                        <p>The Monopolist</p>
                    </div>
                    <div class="elite-container" id="eoc-3">
                        <div class="elite-nft-3"></div>
                        <h2>Yak #3</h2>
                        <p>The Jobs</p>
                    </div>
                    <div class="elite-container" id="eoc-4"> 
                        <div class="elite-nft-4"></div>
                        <h2>Yak #4</h2>
                        <p>The Musk</p>
                    </div>
                    <div class="elite-container" id="eoc-5">
                        <div class="elite-nft-5"></div>
                        <h2>Yak #5</h2>
                        <p>The Physicist</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default YakMain