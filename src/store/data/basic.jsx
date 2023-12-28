const levels = [
    {
        intro: (
            <p>
                Джон должен пройти испытание.
                <br />
                Давайте расставим для него платформы над водой!
            </p>
        ),
        theory: (
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
                    <pre>    // Код, который мы хотим выполнить 1000 раз</pre>
                    <code>&#125;</code>
                </div>
            </div>
        ),
        task: (
            <div>
                <p>
                    Запусти цикл и создай 6 платформ для Джона.
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
        )
    },
]

export default levels