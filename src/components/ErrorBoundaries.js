import React from 'react';
import '../styles/App.css'

class ErrorBoundaries{
    constructor(props){
        super(props)
        this.state = {hasError: false}
    }
     static getDerivedStateFromError(){return {hasError: true}}
     
     componentDidCatch(error, info){console.log("something went wrong", error, info)}
     
     render(){
        if(this.state.hasError){ return <h1 className='error-boundary'>Something Went Wrong</h1>}
        return this.props.children
     }
}