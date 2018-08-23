const controller = {};
//Ver registros
controller.list =  (req, res)=>{
    //Pide la conexion a mysql
    req.getConnection((err, conn)=>{
        conn.query('select *from customer',(err,datos)=>{
            //si hay error
            if(err){
                res.json(err);
            }
            //Sino, renderiza la vista con los datos traidos
            res.render('customers',{
                data: datos
            });
        });
    });
};
//Insertar
controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO customer set ?', data, (err, customer) => {
        console.log(customer)
        res.redirect('/');
      })
    })
  };
//Eliminar
controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
        res.redirect('/');
      });
    });
}
//Actualizar
controller.update = ((req,res)=>{
    const { id } = req.params;
    const upd = req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE customer set ? where id = ?',[upd,id],(err,rows)=>{
            res.redirect('/');
        })
    })
});
//Traer datos para editar
controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
          console.log(rows);
        res.render('customer_edit',{
            data: rows[0]
        });
      });
    });
};

//Load login
controller.loadLogin=(req,res)=>{
    res.render('login');
}

controller.login =(req,res)=>{
    req.getConnection((err,conn)=>{
        
    })
}
module.exports = controller;