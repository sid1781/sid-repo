
 //Creat a class cylinder and use the getters and setters to set its radius and height

  class  Cylinder{

       float A;
       private int radius;
       private int height;
       private float length;
       private float breadth;

//      public void setRadius(int r)
//       {
//           this.radius=r;
//       }
//       public void setHeight(int h)
//       {
//           this.height=h;
//       }

       public  Cylinder(int h, int r)
       {
           this.radius=r;
           this.height=h;
       }
       public Cylinder(float l , int b)
       {
           this.length=l;
           this.breadth=b;
       }


       public int getRadius()
       {
           return radius;
       }

       public int getHeight()
       {
           return height;
       }
       public  double  SurfaceArea()
       {
           A = (float) (2*3.145*radius*height+2*3.1425*(radius*radius));
           return A;
       }

  }
public class CWH_44_Practice_on_Access_Specifiers {
    public static void main(String[] args) {

        Cylinder cl= new Cylinder(5,5);
//        cl.setRadius(5);
//        cl.setHeight(5);
        System.out.println(cl.getHeight());
        System.out.println(cl.getRadius());
        System.out.println(cl.SurfaceArea());

    }
}
