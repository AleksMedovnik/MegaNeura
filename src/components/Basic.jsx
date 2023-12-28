const Basic = props => {
    return (
        <div className="vh-100 d-flex overflow-y-hidden">
            <div className="message-note pd-10 d-flex justify-content-center align-items-center">
                <h1 className="text-white text-center font-neucha">
                    Please enlarge the viewing area or access the site from your computer (laptop)
                    </h1>
            </div>
            <div className="overflow-y-auto container">
                <div className="font-neucha bg-center bg-fixed bg-space bg-cover">
                <div className="bg-mask-8 pd-10">
                    <div className="font-neucha">
                        <h4 className="mb-5">Intro</h4>
                        {props.intro}
                    </div>
                    <div className="mb-10">
                        <h4 className="mb-5">Theory</h4>
                        {props.theory}
                    </div>
                    <div>
                        <h4 className="mb-5">Task  №{props.level}</h4>
                        {props.task}
                    </div>
                </div>
                </div>
            </div>
            <div className="pd-side-10 d-flex flex-column justify-content-between">
                <div className="m-auto mb-10 game">
                    {/* Здесь будет canvas  */}
                </div>
                <div className="terminal">
                    <h4>Enter your code:</h4>
                    {props.formInput}
                </div>
            </div>
        </div>
    )
}

export default Basic