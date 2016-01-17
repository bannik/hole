# A (w)Hole UI
##### Disclaimer: Shit might brake
##### Disclaimer N.2: Styles are still not applied here
##### Using React Static Boilerplate to test this one out, you need any boiler with postCss or anything like that
No styles are still written for this one so please wait for it!
I am trying to put all unicorns in place to help me out!

#### So how it actually works?

I have built a list of components which are based on the most common needs I was able to find out. You have to download the repo and import any of the files you need (there is an example for each component). Then you just render the component you need with the properties you want it to have. And you are ready to go.



## Try It

```
npm install

npm start
```

And now I will slowly add things to the app and you will see how the magic happens down here, if something is not clear or not working please put up there an issue and I will try to fix it :)

## Button (src/ui/button.js)

```
import { Button } from __your__dir_location__'/hole'

<Button label="Holla!" type="primary"/>
```

#### Properties their type and what do they accept

| Properties  | Type     | Values   |
| ----------- | -------- | -------- |
| type        | String   | primary, success, error, warning |
| label       | String   | Any String |
| disabled    | Boolean  | true/false |
| icon        | String   | icon url |
| customClass | String   | name or names of classes separated with a space (' ') |
| onClick     | Function | a function which is called on click of the button |



## Input (src/ui/input.js)

```
import { Input } from __your__dir_location__'/hole'

<Input placeholder="Type anything" defaultValue="donut" customClass="sampleClassInput" type="text" label="Sample Input" name="sampleInput"/>
```

#### Properties their type and what do they do - accept

| Properties   | Type     | Values   |
| ------------ | -------- | -------- |
| type         | String   | same as input type in HTML |
| label        | String   | label of the input - Any String |
| name         | String   | name and the id of the input - Any String |
| defaultValue | String   | value which the input gets by default - Any String |
| customClass  | String   | name or names of classes separated with a space (' ') - Any String |
| alteredPrice | Function | a function with one value passed which is what you get from the input  |

## Checkbox (src/ui/checkBox.js)

```
import { CheckBox } from __your__dir_location__'/hole'

<CheckBox label="Type anything" checked={false} customClass="sampleClassCheckbox" />
```

#### Properties their type and what do they do - accept

| Properties   | Type     | Values   |
| ------------ | -------- | -------- |
| label        | String   | label of the checkbox - Any String |
| customClass  | String   | name or names of classes separated with a space (' ') - Any String |
| checked      | Boolean  | true or false to toggle the checkbox |
| onClick      | Function | a function which handles the click event on the checkBox |
