const CACHE_NAME = "tflodia-v1";
const ASSETS = [
    "/",
    "/index.html",
    "/style.css", 
    "/script.js",
    
    // Class 9 & 10 English Books/Notes
    "/eng9.html", "/eng10.html",
    "/bookeng9.html", "/bookodia9.html",
    "/noteeng9.html", "/noteeng10.html",
    "/notesceng9.html", "/notesceng10.html",
    
    // Odia & Syllabus
    "/odia9.html", "/odia10.html",
    "/noteodia9.html", "/noteodia10.html",
    "/syllabuseng9.html", "/syllabuseng10.html",
    "/syllabusodia9.html", "/syllabusodia10.html",

    // Math/Algebra/Geometry
    "/notematheng9.html", "/notematheng10.html",
    "/notealgebraodia9.html", "/notealgebraodia10.html",
    "/notegeometryodia9.html", "/notegeometryodia10.html",
    
    // Science
    "/notelifescienceodia9.html", "/notelifescienceodia10.html",
    "/notephysicalscienceodia9.html", "/notephysicalscienceodia10.html", 
    
    // Lectures (Lec Files)
    "/leceng9.html", "/leceng10.html",
    "/lecodia9.html", "/lecodia10.html",
    "/lecmatheng9.html", "/lecmatheng10.html",
    "/lecscienceeng9.html", "/lecscienceeng10.html",
    "/lecalgebraodia9.html", "/lecalgebraodia10.html",
    "/lecgeometryodia9.html", "/lecgeometryodia10.html",
    "/leclifescienceodia9.html", "/leclifescienceodia10.html",
    "/lecphysicalscienceodia9.html", "/lecphysicalscienceodia10.html",

    // PYQ (Previous Year Questions)
    "/pyqeng10.html", "/pyqodia10.html"
];

// Install Event
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Caching all files...");
            return cache.addAll(ASSETS);
        })
    );
});

// Fetch Event (Offline Logic)
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});