const levels = [
    {
        successResult: 123,
        description: (
            <div>
                <div className="font-neucha">
                    <h4 className="mb-5">Intro</h4>
                    <p>
                        John must pass the test.
                        <br />
                        Let's put the platforms above water for him!
                    </p>
                </div>
                <div className="mb-10">
                    <h4 className="mb-5">Theory</h4>
                    <div>
                        <p>
                            In order to create a platform, you need to call the function <span className="font-roboto">createPlatform</span>.
                            <br />
                            That's it: <span className="font-roboto">createPlatform()</span>.
                        </p>
                        <p>
                            But we only have one platform, and it takes 6 platforms to cross the sea.
                        </p>
                        <p>
                            Do we really have to call the function 6 times?
                        </p>
                        <p>
                            That's it:
                        </p>
                        <p>
                            <span className="font-roboto">createPlatform()</span>
                            <br />
                            <span className="font-roboto">createPlatform()</span>
                            <br />
                            <span className="font-roboto">createPlatform()</span>
                            <br />
                            <span className="font-roboto">createPlatform()</span>
                            <br />
                            <span className="font-roboto">createPlatform()</span>
                            <br />
                            <span className="font-roboto">createPlatform()</span>
                        </p>
                        <p>
                            Fortunately, loops have been invented in programming for this purpose. Loops allow you to avoid repeating code repetition.
                        </p>
                        <p>
                            For example, the loop below is run 1000 times!
                        </p>
                        <div className="font-bold">
                            <code>for i = 0; i &lt; 1000; i++ &#123; &#125;</code>
                        </div>
                        <p>
                            The code that we want to execute, for example 1000 times in a row, must simply be inserted inside the loop!
                        </p>
                        <p>
                            That's it:
                        </p>
                        <div className="font-roboto">
                            <code>for i = 0; i &lt; 1000; i++ &#123;</code>
                            <br />
                            <code>// The code we want to execute 1000 times</code>
                            <br />
                            <code>&#125;</code>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="mb-5">Task  №1</h4>
                    <div>
                        <p>
                            Run the loop and create 6 platforms for John.
                        </p>
                        <p>
                            That's it:
                        </p>
                        <div className="font-bold">
                            <code>for i = 0; i &lt; 6; i++ &#123;</code>
                            <code>
                                <pre>    createPlatform()</pre>
                            </code>
                            <code>&#125;</code>
                        </div>
                    </div>
                </div>
            </div>
        ),
        errorPage: (
            <div>

            </div>
        ),
        successPage: (
            <div>
                <h1>Отлично!</h1>
                <p>
                    Lorem, ipsum dolor
                </p>
            </div>
        )
    },
]

export default levels