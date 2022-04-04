import React from 'react';

const Blog = () => {
    return (
        <div>
            <h4 style={{ color: 'RGB(220,77,1)' }}>The difference between inline block and block </h4>
            <ul className='text-start container mb-5'>
                <li><b>Defination - </b> In HTML many tags cover full width and don't allow any other tag next to it those are block elements. But there are some tag which are cover only enough width they need and allow others alongside those are inline block  </li>
                <li><b>Margin -</b>Block element has top and bottom margin, inline element don't </li>
                <li><b>New Line -</b>Block elements always start from a new line, inline elements don't</li>
                <li><b>Example - </b> Header, main, section,  div, footer are example of block element tag. Span,small, script, input, br,a, img this are example of inline elemnent  </li>

            </ul>

            <h4 style={{ color: 'RGB(220,77,1)' }}>The defination of symentic tag </h4>
            <p className='text-start container mb-5'>In HTML all tags are not so easy to understand literally. But in HTML5 try to make it easy. In HTML5 which tags are meaningful for both developer and browser those are known as symentic tag. As example article, header, footer are consider as symantic tag those are actually use as their meaning. </p>
        </div>
    );
};

export default Blog;