// ------------------------------------------------------------------------------
//  Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.  See License in the project root for license information.
// ------------------------------------------------------------------------------
function getRequestBodyEditor() {
    return getAceEditorFromElId("jsonEditor");
}

function getHeadersEditor() {
    return getAceEditorFromElId("jsonEditorHeaders");
}

function getJsonViewer() {
    return getAceEditorFromElId("jsonViewer");
}

function getAceEditorFromElId(id:string) {
    return ace.edit(document.getElementById(id));
}

function initializeAceEditor(editor, text?) {
    commonAceSetup(editor);

    if (text) {
        editor.getSession().insert(0, text);
    }

    editor.moveCursorTo(1, 0);
}

// standard ace editor setup and customizations
function commonAceSetup(editor) {
    editor.setShowPrintMargin(false);
    editor.$blockScrolling = Infinity;
    editor.renderer.setOption('showLineNumbers', false);

    //accessibility - keyboard dependant users must be able to "tab out" of session
    editor.commands.bindKey("Tab", null);
}