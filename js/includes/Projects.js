const Projects = [
    {
        "name": "OMSI 2 WebServer / Info Tool",
        "description": "Takes information from OMSI 2, and sends it to a webserver to be displayed like a real time bus app.",
        "purpose": "Personal",
        "year": "2023/2024",
        "skills_developed": [
            "Learning C#",
        ],
        "languages": [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "C#"
        ],
        "assets": [
            {"desc": "Vehicle page where the trip info from in game is shown", "filename": "omsiwebserver_image1.png"},
            {"desc": "Page showing the trips that the player has driven in game, all stored in a JSON file.", "filename": "omsiwebserver_image2.png"}
        ],
        // "github": "https://github.com/Superchicken962/OMSIWebServer",
        "private": true
    },
    {
        "name": "Gym Workout Tracker",
        "description": "Basic website that reads and writes to a JSON file to keep track of gym sessions.",
        "purpose": "Personal",
        "year": "2023",
        "skills_developed": [],
        "languages": [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
        ],
        "assets": [
            {"desc": "All previous workouts shown", "filename": "gymworkoutwebsite_image1.png"},
            {"desc": "View/edit specific workout", "filename": "gymworkoutwebsite_image2.png"},
        ],
        "private": true
    },
    {
        "name": "TF2 Unboxing Simulator",
        "description": "Website for simulating unboxing cases in 'Team Fortress 2'. Uses localStorage in JavaScript to store items, and fake money for the user.",
        "purpose": "Personal",
        "year": "2023",
        "skills_developed": [],
        "languages": [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
        ],
        "assets": [
            {"desc": "Store where cases can be bought with fake money", "filename": "tf2unboxsim_image1.png"},
            {"desc": "Shopping cart where with items from store", "filename": "tf2unboxsim_image2.png"},
            {"desc": "Page for adding fake money, clicking the button increases the balance instantly.", "filename": "tf2unboxsim_image3.png"},
            {"desc": "The backpack - where all bought/found items are stored.", "filename": "tf2unboxsim_image4.png"},
            {"desc": "Recreation of the 'unboxing' from Team Fortress 2 using a GIF.", "filename": "tf2unboxsim_image5.png"},
            {"desc": "Page to easily add new cases to the website (Authorised access only).", "filename": "tf2unboxsim_image6.png"},
            {"desc": "Web scraping the TF2 Wiki to find items in the case (Authorised access only).", "filename": "tf2unboxsim_image7.png"},
        ],
        // "github": "https://github.com/Superchicken962/tf2unboxsimulator",
        // "viewonline": "http://tf2unboxsimulator.uk.to/",
        "private": false
    },
    {
        "name": "Minecraft Server Plugin + Logs Website",
        "description": "Plugin I created while learning Java/Spigot MC for my minecraft server with friends. I also created a logs website, where the plugin would send POST requests of some events to the web server for logging.",
        "purpose": "Personal",
        "year": "2023",
        "skills_developed": [
            "Learning Java",
            "Plugin development for minecraft using Spigot"
        ],
        "languages": [
            "Java",
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
        ],
        "assets": [
            {"desc": "Discord webhook messages sent with information from the minecraft server", "filename": "minecraftplugin_image1.png"},
        ],
        "private": true
    },
    {
        "name": "Adelaide Public Transport Website",
        "description": "Uses the adelaide metro api to show arrivals at stops, live vehicles and vehicle information.",
        "purpose": "School Assignment",
        "year": "2023",
        "skills_developed": [
            "Furthering skills in Node.js / Express.js",
        ],
        "languages": [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
        ],
        "assets": [
            {"desc": "List of vehicles in service", "filename": "adelaidebuswebsite_image1.png"},
            {"desc": "Map of vehicles in service", "filename": "adelaidebuswebsite_image1_2.png"},
            {"desc": "List of stops within 1km of geolocation (alternatively, search bar can be used)", "filename": "adelaidebuswebsite_image2.png"},
            {"desc": "Stop information with next & previous arrivals and any service alerts that may apply to a route stopping there", "filename": "adelaidebuswebsite_image3.png"},
            {"desc": "Favourite stops and vehicles for logged in users", "filename": "adelaidebuswebsite_image4.png"},
            {"desc": "'Last seen' vehicle information - vehicle positions are stored in database when in service, then retrieved if not in service when checking page", "filename": "adelaidebuswebsite_image5.png"},
            {"desc": "Trip information, including estimated next services as well as the vehicles that previously serviced the trip", "filename": "adelaidebuswebsite_image6.png"},
            {"desc": "Live vehicle information - show vehicle position on map, with the next stops and it's punctuality", "filename": "adelaidebuswebsite_image7.png"},
        ],
        "private": true
    },
    {
        "name": "Local File Music Player",
        "description": "Play local mp3 files stored in the project directory",
        "purpose": "Personal",
        "year": "2023",
        "skills_developed": [
            "Learned about and worked with the audio api in JavaScript",
        ],
        "languages": [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
        ],
        "assets": [
            {"desc": "Album view - list all songs in the album, and show current song progress on bottom bar along with pause & skip buttons and a volume slider", "filename": "localmusicplayer_image1.png"},
        ],
        "private": true
    },
    {
        "name": "'Dead By Daylight' Stat tracker",
        "description": "Tracks games played in Dead By Daylight (By manually entering data).",
        "purpose": "Personal",
        "year": "2023",
        "skills_developed": [],
        "languages": [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
        ],
        "assets": [
            {"desc": "All saved games of Dead By Daylight, with 'at a glance' stats and grouped by date", "filename": "dbdstattracker_image1.png"},
            {"desc": "Manually recording the game data - choosing killer, survivors, and timing the match and more", "filename": "dbdstattracker_image2.png"},
            {"desc": "Map specific data - shows the official description of the map and lists every game recorded in that map", "filename": "dbdstattracker_image3.png"},
            {"desc": "Killer specific stats - stats for games only against a specified killer", "filename": "dbdstattracker_image4.png"},
            {"desc": "Games summary - statistics/summary of all games", "filename": "dbdstattracker_image5.png"},
        ],
        // "github": "https://github.com/Superchicken962/dbd-manual-stats",
        "private": true
    },

    {
        "name": "Mybraincells",
        "description": "One of the very first websites I created, and published. Home to some 'inside jokes' and also where I applied a lot of my learning in programming along the way.",
        "purpose": "Personal (\"Inside\" Joke)",
        "year": "2020",
        "skills_developed": [
            "Styling",
            "JavaScript",
            "PHP"
        ],
        "languages": [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP"
        ],
        "viewonline": "https://mybraincells.cf",
        "private": false
    }
];