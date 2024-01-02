import { connect } from "react-redux"
import Basic from "../components/Basic"
import { checkResultAC } from '../store/actionCreators/basic'

const mapStateToProps = state => {
    return {
        theory: state.basic.theory,
        form: state.basic.form,
        canvas: state.basic.canvas,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkResult(value){
            dispatch(checkResultAC(value))    
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basic)