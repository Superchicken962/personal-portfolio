const Projects = [
    {
        "name": "Adelaide Bus Notifier",
        "description": "Script to send webhooks to Discord when a vehicle from a configured list of vehicles is found in service.<br>Additionally, it sends a screenshot of my transport website to show where the vehicle is, without needing to do it's own work.",
        "purpose": "Personal",
        "year": "2024",
        "skills_developed": [],
        "languages": [
            "Node.js"
        ],
        "assets": [
            {"desc": "Discord message notifying me about bus '7032' being in service / starting a route.", "filename": "adelaidebusnotifier_bus1.PNG"},
            {"desc": "Discord message notifying me about bus '2801' being in service / starting a route.", "filename": "adelaidebusnotifier_bus2.PNG"}
        ],
        "github": "https://github.com/Superchicken962/adelaide-bus-notifier",
        "private": false,
        "viewonline": null
    },
    {
        "name": "Facebook Marketplace Car Fetcher",
        "description": "Script to scrape marketplace for any new or updated car listings, and to notify me on Discord if there is.<br><br>\"Work smarter, not harder.\"",
        "purpose": "Personal",
        "year": "2024",
        "skills_developed": [
            "Web scraping"
        ],
        "languages": [
            "Node.js"
        ],
        "assets": [
            {"desc": "Discord webhook notifying me that a car listing has had it's price changed.", "filename": "marketplacescraper_result1.PNG"}
        ],
        "github": null,
        "private": true,
        "viewonline": null
    },
    {
        "name": "Spotify Quiz Website",
        "description": "Website to quiz you on songs from any given Spotify playlist or album. Planning to \"publish\" it at some point...",
        "purpose": "Personal",
        "year": "2024",
        "skills_developed": [
            "Working with Spotify API"
        ],
        "languages": [
            "Node.js",
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "assets": [
            {"desc": "Setup menu for creating a singleplayer game.", "filename": "spotifysongquiz_startsp.PNG"},
            {"desc": "Singleplayer game in progress - a \"preview\" of the correct song plays to the user, and they must choose the correct song.", "filename": "spotifysongquiz_spgame1.PNG"},
            {"desc": "Singleplayer game in progress - The correct song was chosen.", "filename": "spotifysongquiz_spgame_correct.PNG"},
            {"desc": "Singleplayer game in progress - The song chosen was incorrect.", "filename": "spotifysongquiz_spgame_wrong.PNG"},
        ],
        "github": null,
        "private": true,
        "viewonline": null
    },
    {
        "name": "YouTube Auto Adskipper",
        "description": "Auto skips ads on youtube, and speeds up unskippable ads. Also features a ranking system based number of ads skipped by users.",
        "purpose": "Personal",
        "year": "2024",
        "skills_developed": [
            "Chrome extension development"
        ],
        "languages": [
            "HTML",
            "JavaScript"
        ],
        "assets": [],
        "github": null,
        "private": false,
        "viewonline": "https://chromewebstore.google.com/detail/youtube-ad-auto-skip-mute/ipenehognpepmfokjeckpbenhjfchcfd"
    },
    {
        "name": "Basic Discord Rich Presence Tool",
        "description": "Simply just sets discord rich presence info from a config file using a discordrpc library",
        "purpose": " Personal",
        "year": "2024",
        "skills_developed": [
            "Learning C#"
        ],
        "languages": [
            "C#"
        ],
        "assets": [],
        "github": null,
        "private": true
    },
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
            {"desc": "Vehicle page where the trip info from in game is shown", "filename": "omsiwebserver_image1.PNG"},
            {"desc": "Page showing the trips that the player has driven in game, all stored in a JSON file.", "filename": "omsiwebserver_image2.PNG"}
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
            {"desc": "All previous workouts shown", "filename": "gymworkoutwebsite_image1.PNG"},
            {"desc": "View/edit specific workout", "filename": "gymworkoutwebsite_image2.PNG"},
        ],
        "private": true
    },
    {
        "name": "TF2 Unboxing Simulator",
        "description": "Website for simulating unboxing cases in 'Team Fortress 2'. Uses localStorage in JavaScript to store items, and fake money for the user.",
        "purpose": "Personal",
        "year": "2023",
        "skills_developed": [
            "Web scraping"
        ],
        "languages": [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
        ],
        "assets": [
            {"desc": "Store where cases can be bought with fake money", "filename": "tf2unboxsim_image1.PNG"},
            {"desc": "Shopping cart where with items from store", "filename": "tf2unboxsim_image2.PNG"},
            {"desc": "Page for adding fake money, clicking the button increases the balance instantly.", "filename": "tf2unboxsim_image3.PNG"},
            {"desc": "The backpack - where all bought/found items are stored.", "filename": "tf2unboxsim_image4.PNG"},
            {"desc": "Recreation of the 'unboxing' from Team Fortress 2 using a GIF.", "filename": "tf2unboxsim_image5.PNG"},
            {"desc": "Page to easily add new cases to the website (Authorised access only).", "filename": "tf2unboxsim_image6.PNG"},
            {"desc": "Web scraping the TF2 Wiki to find items in the case (Authorised access only).", "filename": "tf2unboxsim_image7.PNG"},
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
            {"desc": "Discord webhook messages sent with information from the minecraft server", "filename": "minecraftplugin_image1.PNG"},
        ],
        "private": true
    },
    {
        "name": "Adelaide Public Transport Website",
        "description": "Uses the adelaide metro api to show arrivals at stops, live vehicles and vehicle information. Development has since continued after the assignment, and should be published in the next few weeks.",
        "purpose": "School Assignment / Personal",
        "year": "2023-2024",
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
            {"desc": "List of vehicles in service", "filename": "adelaidebuswebsite_image1.PNG"},
            {"desc": "Map of vehicles in service", "filename": "adelaidebuswebsite_image1_2.PNG"},
            {"desc": "List of stops within 1km of geolocation (alternatively, search bar can be used)", "filename": "adelaidebuswebsite_image2.PNG"},
            {"desc": "Stop information with next & previous arrivals and any service alerts that may apply to a route stopping there", "filename": "adelaidebuswebsite_image3.PNG"},
            {"desc": "Favourite stops and vehicles for logged in users", "filename": "adelaidebuswebsite_image4.PNG"},
            {"desc": "'Last seen' vehicle information - vehicle positions are stored in database when in service, then retrieved if not in service when checking page", "filename": "adelaidebuswebsite_image5.PNG"},
            {"desc": "Trip information, including estimated next services as well as the vehicles that previously serviced the trip", "filename": "adelaidebuswebsite_image6.PNG"},
            {"desc": "Live vehicle information - show vehicle position on map, with the next stops and it's punctuality", "filename": "adelaidebuswebsite_image7.PNG"},
        ],
        "private": false,
        "viewonline": "https://apt.markgurney.dev/"
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
            {"desc": "Album view - list all songs in the album, and show current song progress on bottom bar along with pause & skip buttons and a volume slider", "filename": "localmusicplayer_image1.PNG"},
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
            {"desc": "All saved games of Dead By Daylight, with 'at a glance' stats and grouped by date", "filename": "dbdstattracker_image1.PNG"},
            {"desc": "Manually recording the game data - choosing killer, survivors, and timing the match and more", "filename": "dbdstattracker_image2.PNG"},
            {"desc": "Map specific data - shows the official description of the map and lists every game recorded in that map", "filename": "dbdstattracker_image3.PNG"},
            {"desc": "Killer specific stats - stats for games only against a specified killer", "filename": "dbdstattracker_image4.PNG"},
            {"desc": "Games summary - statistics/summary of all games", "filename": "dbdstattracker_image5.PNG"},
        ],
        // "github": "https://github.com/Superchicken962/dbd-manual-stats",
        "private": true
    },

    // {
    //     "name": "Mybraincells",
    //     "description": "One of the very first websites I created, and published. Home to some 'inside jokes' and also where I applied a lot of my learning in programming along the way.",
    //     "purpose": "Personal (\"Inside\" Joke)",
    //     "year": "2020",
    //     "skills_developed": [
    //         "Styling",
    //         "JavaScript",
    //         "PHP"
    //     ],
    //     "languages": [
    //         "HTML",
    //         "CSS",
    //         "JavaScript",
    //         "PHP"
    //     ],
    //     "viewonline": "https://mybraincells.cf",
    //     "private": false
    // }
];