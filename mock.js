{ title, description, installation, usage, license, contributions, test }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Tell Me The Facts</title>
</head>
<body>
    <header id="title" class="text-7xl text-center">${title}</header>
    <img src="${licenseBadge(license)}">
        <section id="description" class="content-between">
            <h1 class="text-4xl"> DESCRIPTION </h1>
            <p>${description}</p>
        </section>
        <section id="toc">
            <h1 class="text-4xl"> TABLE OF CONTENTS </h1>
            <ol>
            <li><a href="#description">Description</a></li>
            <li><a href="#installation">Installation</a></li>
            <li><a href="#usage">Usage<a/></li>
            <li><a href="#license">License</a></li>
            <li><a href="#contribute">Contributing</a></li>
            <li><a href="#tests">Tests</a></li>
            <li><a href="#question"><Questions></a></li>
            </ol>
        </section>
        <section id="installation">
            <h1 class="text-4xl"> INSTALLATION </h1>
            <p>${installation}</p>
        <section id="usage">
            <h1 class="text-4xl">USAGE</h1>
            <p>${usage}</p>
        </section>
        <section id="license">
            <h1 class="text-4xl">LICENSE</h1>
            <p>${license}</p>
        </section>
        <section id="contribute">
            <h1 class="text-4xl">CONTRIBUTING</h1>
            <p>${contributions}</p>
        </section>
        <section id="tests">
            <h1 class="text-4xl">TESTS</h1>
            <p>${test}</p>
        </section>
        <section id="question">
            <h1 class="text-4xl">QUESTIONS</h1>
            <p></p>
        </section>
    
</body>
</html>`;