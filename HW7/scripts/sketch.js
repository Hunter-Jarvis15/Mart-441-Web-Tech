var myViewMasterArray = new Array();


class ViewMaster
{
    constructor(title, image, description, author, year)
    {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.year = year;
        
    }

    name()
    {
        return "Title: " + this.title;    
    }
    picture()
    {
        return "Link: " + this.image;
    }
    what()
    {
        return this.description;
    }
    who()
    {
        return "Author: " + this.author;
    }
    when()
    {
        return "Year Published: " + this.year;
    }

}

function initializeArray()
{

    var myViewMaster = new ViewMaster("afro.died", "https://www.nga.gov/collection/art-object-page.176142.html", "Rozeal uses the title of this work, a play on Aphrodite, ancient Greek goddess of love and beauty, to present a cross-cultural rebellion on beauty ideals that traverses the Eastern and Western Hemispheres.", "Rozeal", 2011);
    var myViewMaster1 = new ViewMaster("¡Cesen Deportación!", "https://www.nga.gov/collection/art-object-page.170408.html", "Rupert García is a Mexican American artist from California whose work addresses civil rights, racism, and specific injustices against Latin American communities. He created this poster—“Cease Deportation!” in English—in the early 1970s to protest deportations of undocumented Mexican immigrants. ", "Rupert García", 1973);
    var myViewMaster2 = new ViewMaster("Magnolia", "https://www.nga.gov/collection/art-object-page.211390.html", "Iturbide is among the foremost figures in Mexican photography, known for her work documenting Indigenous cultures around the world. In 1978 the Instituto Nacional Indigenista hired her to photograph Mexico’s Indigenous populations. As part of that work, she traveled to Juchitán, whose inhabitants are of Zapotec heritage, with a matriarchal society. ", "Graciela Iturbide", 1986);
    var myViewMaster3 = new ViewMaster("Self-Portrait", "https://www.nga.gov/collection/art-object-page.52380.html", "Born in 1896 in Chihuahua, Mexico, to a bourgeois family, Siqueiros went to Mexico City as a teenager to study art and architecture. The year was 1910, the beginning of the Mexican Revolution. He became immediately involved in student strikes to fight for the rights of Mexican workers and the poor. At age 18, he joined the Mexican Revolutionary Army, and later, the Communist Party. Jailed and exiled from Mexico several times for his radical views and his harsh criticism of the Mexican government, he continued to fit for the rights he believed in for the rest of his life.", "David Alfaro Siqueiros", 1948);
    var myViewMaster4 = new ViewMaster("John Lewis and Colleagues, Prayer Demonstration at a Segregated Swimming Pool", "https://www.nga.gov/collection/art-object-page.197916.html", "n 1962 photographer Danny Lyon captured three young African Americans protesting through prayer in front of a “whites-only” swimming pool and recreational facility in Cairo, Illinois. Their demonstration was part of a larger effort to integrate businesses and other spaces in the town. Lyon was involved in the movement and developed strong relationships with members of the Student Nonviolent Coordinating Committee (SNCC), a group of young people who were committed to full-time grassroots organization.", "Danny Lyon", 1962);

    myViewMasterArray.push(myViewMaster);
    myViewMasterArray.push(myViewMaster1);
    myViewMasterArray.push(myViewMaster2);
    myViewMasterArray.push(myViewMaster3);
    myViewMasterArray.push(myViewMaster4);

}

function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myViewMasterArray.length);

    document.getElementById("name").innerHTML = myViewMasterArray[randomNumber].name();
    document.getElementById("picture").innerHTML = myViewMasterArray[randomNumber].picture();
    document.getElementById("what").innerHTML = myViewMasterArray[randomNumber].what();
    document.getElementById("who").innerHTML = myViewMasterArray[randomNumber].who();
    document.getElementById("when").innerHTML = myViewMasterArray[randomNumber].when();

}