import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <h2 className='blogs-title'>Blogs ....</h2>
            <div className='blogs-container'>

                <div className='blogs'>
                    <h4>What is context API?</h4>
                    <p><strong>ContextAPI</strong>: mens i can use any data send to any components without any child derection ways. i can send direct to user components to main part.</p>
                    <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
                    <p>However, sometimes the same data needs to be accessible by many components in the tree, and at different nesting levels. Context lets you “broadcast” such data, and changes to it, to all components below. Common examples where using context might be simpler than the alternatives include managing the current locale, theme, or a data cache.</p>

                </div>
                <div className='blogs'>
                    <h4> What is semantic Tag ?</h4>
                    <p> <strong>Semantic Tag</strong>:
                        Syntax is the arrangement of elements and attributes to create well-formed documents. Semantics is concerned with meaning. In HTML, this is the purpose of elements and attributes, and the logical (sense and reference) relationship between elements and the attributes of those elements.
                    </p>
                    <p><strong>Why Important</strong>:
                        One of the most important features of HTML5 is its semantics. Semantic HTML refers to syntax that makes the HTML more comprehensible by better defining the different sections and layout of web pages. It makes web pages more informative and adaptable, allowing browsers and search engines to better interpret content.
                    </p>
                </div>
                <div className='blogs'>
                    <h4>What is the difference  inline block and block elements </h4>
                    <p><strong>inline-block</strong>: brought a new way to create side by side boxes that collapse and wrap properly depending on the available space in the containing element. It makes layouts that were previously accomplished with floats easier to create. No need to clear floats anymore.</p>
                    <p>Compared to display: inline, the major difference is that inline-block allows to set a width and height on the element. Also, with display: inline, top and bottom margins & paddings are not respected, and with display: inline-block they are.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;