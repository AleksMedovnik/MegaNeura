const levels = [
    {
        successResult: `for i = 0; i < 6; i++ {
    createPlatform()
}`,
        description: (
            <div>
                <div className="font-neucha">
                    <h4 className="mb-5">Intro</h4>
                    <p>
                        Дэн должен пройти испытание.
                        <br />
                        Давайте расставим для него платформы над водой!
                    </p>
                </div>
                <div className="mb-10">
                    <h4 className="mb-5">Theory</h4>
                    <div>
                        <p>
                            Для того, чтобы создать платформу, нужно вызвать функцию <span className="font-roboto">createPlatform</span>.
                            <br />
                            Вот так: <span className="font-roboto">createPlatform()</span>.
                        </p>
                        <p>
                            Но у нас есть только одна платформа, а для того, чтобы пересечь море, нужно 6 платформ.
                        </p>
                        <p>
                            Неужели нам придется вызывать функцию 6 раз?
                        </p>
                        <p>
                            Вот так:
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
                            К счастью, для этой цели в программировании придуманы циклы. Циклы позволяют избегать повторения
                            кода.
                        </p>
                        <p>
                            Например, цикл ниже запускается 1000 раз!
                        </p>
                        <div className="font-bold">
                            <code>for i = 0; i &lt; 1000; i++ &#123; &#125;</code>
                        </div>
                        <p>
                            Код, который мы хотим выполнить, например, 1000 раз подряд, необходимо просто вставить внутрь цикла!
                        </p>
                        <p>
                            Вот так:
                        </p>
                        <div className="font-roboto">
                            <code>for i = 0; i &lt; 1000; i++ &#123;</code>
                            <br />
                            <code>// Код, который мы хотим выполнить 1000 раз</code>
                            <br />
                            <code>&#125;</code>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="mb-5">Задание №1</h4>
                    <div>
                        <p>
                            Запусти цикл и создай 6 платформ для Дэна.
                        </p>
                        <p>
                            Вот так:
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
            <div className="mvh-100">
                <p>
                    Немного не так:)
                </p>
                <p>
                    Попробуй ещё раз!
                </p>
                <p>
                    Запусти цикл и создай 6 платформ для Дэна.
                </p>
                <p>
                    Вот так:
                </p>
                <div className="font-bold">
                    <code>for i = 0; i &lt; 6; i++ &#123;</code>
                    <code>
                        <pre>    createPlatform()</pre>
                    </code>
                    <code>&#125;</code>
                </div>
                <p>
                    Перепиши всё слово в слово, учитывая количество пробелов.
                </p>
            </div>
        ),
        successPage: (
            <div className="mvh-100">
                <p>
                    Отлично!
                    <br />
                    Задание выполнено!
                </p>
                <p>
                    Как видишь, на игровой карте появились 6 платформ!
                </p>
                <p>
                    Ты заработал 10 баллов!
                </p>
                <p>
                    Чтобы продолжить, нажми кнопку "Перейти к следующему заданию"
                </p>
            </div>
        ),
        next: (
            <div>
                <button 
                    className="w-100 pd-10 run"
                    onClick={e => {
                        alert("Здесь будет переход к новому заданию!")
                        e.preventDefault()
                    }}>
                    Перейти к следующему заданию
                </button>
            </div>
        ),
        inputField: (
            <div className="terminal font-neucha">
                <h4>Напиши свой код:</h4>
                <textarea
                    rows={10}
                    name="input"
                    className="w-100 pd-10 input"
                    placeholder="Напиши свой код здесь:)"></textarea>
                <span>Напиши свой код и нажми кнопку "Выполнить"</span>
                <button className="w-100 pd-10 run">Выполнить</button>
            </div>
        ),
        canvasStart: (
            <div className="m-auto mb-10 game canvas-start">
                {/* Здесь будет canvas  */}
            </div>
        ),
        canvasEnd: (
            <div className="m-auto mb-10 game canvas-end">
                {/* Здесь будет canvas  */}
            </div>
        ),
    },
]

export default levels