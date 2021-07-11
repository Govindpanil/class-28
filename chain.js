class Chain1{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:12,
            stiffness:0.04



        }
        this.pointB=pointB
        this.body=Constraint.create(options)
        World.add(world,this.body)

        
    }
     flying(){
        this.body.bodyA=null 
     }
        
    
     
    display(){
        if(this.body.bodyA){
        var A=this.body.bodyA.position
        var B=this.pointB
        push()
        strokeWeight(5)
        stroke("green")
        line(A.x,A.y,B.x,B.y)
        pop()
        }
    }
}

