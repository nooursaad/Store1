// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// });
// document.addEventListener('selectstart', function(e) {
//     e.preventDefault();
// });
// document.addEventListener('keydown', function(e) {
//     if (
//         e.key === 'F12'
//         (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || 
//             (e.ctrlKey && e.key === 'U')
//     ){
//         e.preventDefault();
//         alert('الحماية مفعله لا يمكنك فحص الكود')
//     }
// })
// منع كليك يمين
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
// منع تحديد النصوص
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});
// منع الضغط على F12 وأدوات المطور
document.addEventListener('keydown', function(e) {
    if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || 
        (e.ctrlKey && e.key === 'U')
    ) {
        e.preventDefault();
        alert("Protection is enabled. You cannot check the code.👀");
    }
});