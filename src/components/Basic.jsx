const Basic = props => {
    const checkResult = e => {
        e.preventDefault()
        props.checkResult(e.target.input.value)
    }
    return (
        <div className="mw-1350 vh-100 d-flex overflow-y-hidden justify-content-between">
            <div className="message-note pd-10 d-flex justify-content-center align-items-center">
                <h1 className="text-white text-center font-neucha">
                    Пожалуйста, увеличь размер экрана или зайди на этот сайт с компьютера (или ноутбука)
                </h1>
            </div>
            <div className="overflow-y-auto container flex-grow-1">
                <div className="font-neucha bg-center bg-fixed bg-space bg-cover">
                    <div className="bg-mask-8 pd-10">
                        {props.theory}
                    </div>
                </div>
            </div>
            <div className="pd-side-10 overflow-y-auto container">
                {props.canvas}
                <form onSubmitCapture={checkResult}>
                    {props.form}
                </form>
            </div>
        </div>
    )
}

export default Basic