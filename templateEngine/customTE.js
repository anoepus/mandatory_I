import fs from 'fs'; //built in file system module (lets js code read, write, update, delete, inspect files and dir's on disk)

export function constructPage (page, options = {}) {
    //returns a string with the html page
    const header = fs.readFileSync('public/components/header.html', 'utf-8');
    const nav = fs.readFileSync('public/components/nav.html', 'utf-8');
    const footer = fs.readFileSync('public/components/footer.html', 'utf-8');

    return header
        //accepts what gets sent as options and replace {{ whatever_thats_in_here }}
        .replaceAll('{{tab_title}}', options.tabTitle || "Mandatory 1")
    + nav
    + page
    + footer;
};

export function readPage (path) {
    return fs.readFileSync(path, 'utf-8');
};