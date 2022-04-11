class Circle{

    constructor(xCoord,yCoord,radius,sAngle,eAngle, color)
    {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.radius = radius;
        this.sAngle = sAngle;
        this.eAngle = eAngle;
        this.color = color;
    }

    get x()
    {
        return this.xCoord;
    }

    set x(value)
    {
        this.xCoord = value;
    }
    get y()
    {
        return this.yCoord;
    }
    set y(value)
    {
        this.yCoord = value;
    }

    get startAngle()
    {
        return this.sAngle;
    }

    get endAngle()
    {
        return this.eAngle;
    }
    get mainColor()
    {
        return this.color;
    }
}