🚀 Dev-Stack Technology
📖 Description

This is my first project using React with TypeScript.

Here I mostly use React-based components, TypeScript, and for UI, I use DaisyUI and Tailwind CSS.

Though it's a small project, I tried my best to apply everything I learned in the last milestone and according to the given requirements.

⚠️ I couldn't make the website responsive yet.

Here you will be able to add data from the cart to another component and remove the data from the component.

Once you select any cart, the button will be disabled and you will not be able to select the same component twice.

Besides, there is a button called "Remove" which will remove every selected cart from the selected component.

I also added React Toastify, which will show a popup if you add, delete, or remove anything.

🛠️ Technology That I Use
⚛️ React
📘 TypeScript
🎨 Tailwind CSS
🌼 DaisyUI
🔷 React Icons
🔔 React Toastify
🎨 Regular CSS
✨ 3 Features About My Project
1️⃣ Add Button

The Add button will add data to your Stack section.

After adding once, the Add button will be disabled.

2️⃣ Delete Button

The Delete button will delete only that selected data.

3️⃣ Remove Button

The Remove button will remove every data from your Stack section.


1. What is JSX, and why is it used in React?
jsx is javascript xml and it help to write html like syntax in ts or js

2. What is the difference between props and state?
props or property help to pass data from one component to another Component
sate or mostly like situation when something change it helps to manage the situation

3. What does the useState hook do, and where did you use it in this project?
usestate is a hook in react and i used it
const [Btnstatus,setBtnstatus] = useState<boolean>(false) here
btnstatus just hold the current value and setbtnstatus which is a function will help to manage the change or current status

4. Why does every item in a .map() list need a unique key prop?
unique key prop help to identify the change quickly if any change happen the state

5. What is conditional rendering? Show one place you used it (example: the empty stack message).

when u are showing something or any data or ui in the website depend on some condition its called conditional rendering
<button onClick={HandleBtnStatus} disabled={Btnstatus}>
                {Btnstatus == true ? "Already Selected":'Add To Stack'}
            </button>
depend on the condition the button text and button status will change

6. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

parent pass data to child using props or property and child can do that by using the function get from usestate.it known as lift state up.