import Button from './Button';

const App = () => {
    return <div>
        <h1>Useful Website</h1>
        <h2>Which website do you want to open?</h2>
        <Button name="Google" link="https://www.google.com/" />
        <Button name="Facebook" link="https://www.facebook.com/" />
        <Button name="Youtube" link="https://www.youtube.com/" />
        <br></br>
        <Button name="Microsoft" link="https://www.microsoft.com/" />
        <Button name="Amazon" link="https://www.amazon.com/" />
        <Button name="Netflix" link="https://www.netflix.com/" />
        <Button name="Github" link="https://www.github.com/" />
    </div>
}

export default App;