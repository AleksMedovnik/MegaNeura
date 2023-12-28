import { connect } from "react-redux"
import Basic from "../components/Basic"

const mapStateToProps = state => {
    return {
        level: state.basic.level,
        intro: state.basic.data.intro,
        theory: state.basic.data.theory,
        task: state.basic.data.task,
        formInput: state.basic.data.formInput,
    }
}

export default connect(mapStateToProps, {})(Basic)