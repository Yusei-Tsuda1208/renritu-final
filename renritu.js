function mod(A){
    let Q = document.getElementById("mod").value;
    let B;
    Q = Number(Q);
    while(A<0){
        A += Q;
    }
    while(A>=Q){
        A -= Q;
    }
    return A;
}


document.getElementById("keisan").addEventListener("click",function (){
    let a1 = document.getElementById("a1").value;
    let a2 = document.getElementById("a2").value;
    let b1 = document.getElementById("b1").value;
    let b2 = document.getElementById("b2").value;
    const c1 = document.getElementById("c1").value;
    const c2 = document.getElementById("c2").value;

    const Q = document.getElementById("mod").value;
    //各変数に値の代入ok//
    let Q1 = Q; //Qの初期値代入//

    let A =a1*b2-a2*b1;
    let A1;
    Number(A);
    A = mod(A);

    A1 = A;
    let r,q,z,i=0;
    document.getElementById("ans").value += (A+"x"+"≡"+1+"(mod"+Q+")を解く") + "\n";
    document.getElementById("ans").value += ("総当たりver") + "\n";
    while(z!==1){
        z = (A1*i)%Q
        document.getElementById("ans").value += ("("+A1+"*"+i+")"+"%"+Q+"="+z) + "\n";
        i++
    }

    //互除法スタート//
    document.getElementById("ans").value += ("ユークリッドの互除法ver") + "\n";
    while(r!==0){
        q = A1/Q1;
        q = parseInt(q,10);
        r = A1%Q1;
        document.getElementById("ans").value += (A1+"="+Q1+"*"+q+"+"+r) + "\n";
        A1 = Q1;
        Q1 = r;
        }
    //互除法OK

    a1_2 = a1;
    a1 = mod(b2*(i-1));
    a2 = mod(a2*(i-1)*-1);
    b1 = mod(b1*(i-1)*-1);
    b2 = mod(a1_2*(i-1));
    document.getElementById("ans").value += (a1+","+a2+","+b1+","+b2) + "\n";

    let x,y;
    x = mod(a1*c1+a2*c2);
    y = mod(b1*c1+b2*c2);
    document.getElementById("X").value += (x);
    document.getElementById("Y").value += (y);
    document.getElementById("ans").value += (x+","+y) + "\n";
});

