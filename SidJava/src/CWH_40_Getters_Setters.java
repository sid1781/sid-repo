class SquareExample {

     private int r;

    public void setR(int r) {
        this.r = r;
    }

    public int getR() {
        return r;
    }
    public int areaOfSqaure()
    {
        return r*r;
    }
}
class  MyEmployee{
    private  String name;
    private  int id;

    public void setName(String n)
    {
        this.name=n;
    }
    public void setId(int i)
    {
        this.id=i;
    }
    public String getName()
    {
        return name;
    }
    public int getId()
    {
        return id;
    }
}
public class CWH_40_Getters_Setters {




    public static void main(String[] args) {


//        MyEmployee sid= new MyEmployee();
//
//        sid.setName("Siddeshwar");
//        sid.setId(24);
//        System.out.println(sid.getName());
//        System.out.println(sid.getId());

        SquareExample sid1= new SquareExample();

        sid1.setR(5);
        System.out.println(sid1.getR());
        System.out.println(sid1.areaOfSqaure());

    }
}
