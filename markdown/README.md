# Goals & Objects
1. What is Markdown?  
  *a. writing format (scripts for a play, blogs) vs html, pdf(publishing format, html, pdf)  
  b. Plain Text /Human readable  
  c. Simple, Compact Syntax (Formatting)  
  d. Open Source  
  e. history: Inspired by email text formatting*  
2. Editor and Setup  
3. Markdown  
4. Enhancements to Markdown  
5. Working Scenarios / Use Cases

# Markdown Basics:
1. All Original Syntax
2. Headings. the max header tag in html is six, same as markdown  
  *a. format :*
    ```
    Header 1
    =========
    Header 2
    ---------
    ```  
   *b. format:*
    ```
    # header 1
    ## header 2
    ### header 3
    ...
    ###### header 6
    ```
3. Paragraph Text & Emphasis.  
	*a. in some cases if we want to change the new line, it needs to hit two "enter" key. or enter two spaces + enter*  
	*b. Emphasis:*  
	(1) Italy:  
	`_content_` : underscore the contents  
	`*content*` : asterisk the contents  

	(2) Strong:  
	`__Strong__`: two underscore  
	`**Strong**`: two asterisk  
	> *__NOTE__: in programming code, for example the variable name : var_example_int, the "_" will name the content inside became the Italy. To Avoid this, we should add \ before the "_".  Like this: `var\_example\_int`. But some of the markdown version does not allow this, so we should use "\*" more than "_".*

4. Quotes & Code Blocks  
	*Quotes:*  
	a. `>` is for the quote  
	b. `>>` is for the child of the quote  

	*Code Blocks:*  
	a. \`content\` will show like the inline code  
	b. \`\`\`content\`\`\` will show the multiple line of code blocks

5. Lists  
	a. using "*, +, -" to create the unordered list bullet. For example:
    >   ```
    >   * Supermarket
    >   + Mall
    >   - Gas Station
    >   ```
    >  Will display as
    >  * Supermarket
    >  + Mall
    >  - Gas Station  

	b. ordered list bullet. The markdown render does not care about the numbers it will render them in order that they are listed.  
	c. nested list:  
     > * Fruit    
     >   * Watermelon
     >   * Strawberry
     > * Veggies    
     >   * Carrots

6. Links  
  *a. Format: `[content]{web url "option title"}`*.
   For example:
   > one of the most popular search engines is [Google](http://google.com "Google Search")  
   > the format is : `[Google]{http://google.com "Google Search"}`  

   *b. We can set an parameter, format is : `[para]: url "option title"`. After that, we can use this para like this: '[content][para]'*  
   > A distant second is Microsoft's [Bing][msb]  
   > the format is : `[msb]: http://bing.com "Bing Search Engine"`.  

   *c. automatic links : using angle brackets `<>`, the markdown will automatically convert links into actual links.*

7. Images  
  *a. Format: `![content]{web url "option title"}`*.  
   For example:  
   > This is an line image ![Demo](http://placehold.it/350x150)  
   > the format is : `![Demo](http://placehold.it/350x150)`  

   *b. We can set an parameter, format is : `[para]: url "option title"`. After that, we can use this para like this: '[content][para]'*  
   > Placehold,it is a nice place to get some placeholder grahics.
   > ![300 x 300 demo][Demo300]
   > the format is : `[Demo300]:http://placehold.it/300 "300-pixel squared placeholder"`.  

8. Horizontal Rule  
  a. add the "---" or '\*\*\*' between the paragraph  will display a line between the paragraphs.

9. Inline HTML  
	sometimes you need to add some inline HTML
	> <dl>
	>    <dt>Markdown</dt>
	>    <dd>An awesome plain-text format</dd>
	> </dl>  
	Here is the code for a definition list in HTML
      ```
	    <dl>
    		<dt>Markdown</dt>
    		<dd>An awesome plain-text format</dd>
	    </dl>
      ```
---

## Enhanced Markdown
1. Table  
  Format:
  ```
  Item     | Value
  -------- | -----
  Computer | $1600
  Phone    | $12
  Pipe     | $1
  ```
  Display:

  Item     | Value
  -------- | -----
  Computer | $1600
  Phone    | $12
  Pipe     | $1

  Note: if we put the ":" in the "---", it will change the aligns.  
  > ":---" : means align left.
  > ":---:" : means align centre.
  > "---:" : means align right.  


2. Fenced Code Blocks with Syntax Highlighting  
  This is code below.

  ```java
  import java.io.*;

  public class Foo(){
    public static void main(String[] args){
      System.out.println("this is a test.");
    }
  }
  ```

  ```ruby
  #!/usr/bin/env ruby
  print "Hello Ruby!\n"
  print "Goodbye Ruby\n"
  ```

# Flvors of Markdown
  1. Markdown (Original, John Gruber)
  2. Enhanced versions
    a. Markdown Extra
    b. Multi-Markdown
    c. GitHub Flavored Markdown
    d. Several More

# Why Markdown?
  1. Simple Format
  2. Lightweight
  3. Widely Supported
  4. Cross-Platform / Cross-Device
  5. Online / Cloud-Based Workflows
  6. Use for Writing / Publish to HTML /PDF/Other

# Use Cases:
  1. Cloud-based Note Taking
  2. Outlining / Brainstorming
  3. Composition / Prose / Scripts
  4. Congent for a Blog / Website
  5. GitHub /

# Editor / Setup
  1. Any Text Editor
    a. Markdown-aware Editors Abound
  2. Dedicated Markdown Editors
  3. Integrated Development Environments
  4. Online Editors (stackEdit.io)

# StackEdit.io
  1. Online Editor / Browser
  2. Connects to Dropbox and Google Drive
  3. Excellent Live Preview
  4. Publish to Wordpress and many others
  5. Toggle Markdown vs Extra / GHFM
  6. Free
