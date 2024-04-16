class  Circle{
     int radius;
     double areaCircle;
     Circle(int r )
     {
         this.radius=r;
     }
    public int getRadius() {
        return radius;
    }
    public double areaOfCircle()
    {
        areaCircle = Math.PI*(radius*radius);
        return areaCircle ;
    }
}
class Cylinder1 extends Circle{


    int height;
    double  surFaceArea;
     public Cylinder1(int r, int h){
        super(r);
        this.height=h;
    }

     public double surFaceArea()
     {
         surFaceArea= 2 * Math.PI*height*radius+ 2* Math.PI*( radius*radius);
         return surFaceArea;
     }

}

class Rectangle extends Cylinder1
{
    int length;
    int breadth;

     public Rectangle(int l , int b)
     {
         super(l,b);
         this.length=l;
         this.breadth=b;
     }
     public int areaOfRectangle()
     {
         return length*breadth;
     }
}
class Cuboid extends Rectangle{

    Cuboid(int l , int b, int h)
    {
        super(l,b);
        this.height=h;

    }
    public int areaOFCuboid()
    {
        return length*breadth*height;
    }
}

public class CWH_52_InheritanceExersize {
    public static void main(String[] args) {

        //Problem 1:
//        Cylinder1 cy= new Cylinder1(5,5);
//        System.out.println(cy.areaOfCircle());
//        System.out.println(cy.surFaceArea());

        Cuboid cb = new Cuboid(5,5,5);
        System.out.println(cb.areaOFCuboid());


    }
}
