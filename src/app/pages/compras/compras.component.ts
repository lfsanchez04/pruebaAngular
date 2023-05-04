import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VentasService } from '../../services/ventas.service';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss'],
})
export class ComprasComponent {
  products: Product[] = [ //ARREGLO DE DATOS PARA LA COMPRA
    {
      id: 1,
      name: 'Apartamento1',
      image: '../../../assets/imgs/img1.png',
      price: 5000,
    },
    {
      id: 2,
      name: 'Apartamento2',
      image: '../../../assets/imgs/img2.png',
      price: 2500,
    },
    {
      id: 3,
      name: 'Apartamento3',
      image: '../../../assets/imgs/img3.png',
      price: 3500,
    },
    {
      id: 4,
      name: 'Apartamento4',
      image: '../../../assets/imgs/img4.png',
      price: 4800,
    },
    {
      id: 5,
      name: 'Apartamento5',
      image: '../../../assets/imgs/img5.png',
      price: 6200,
    },
  ];
  //Guardar datos del formulario
  form: any = this.fb.group({
    product: ['', Validators.required],
    quantity: ['', Validators.required],
    price: [''],
  });
  //Datos por defecto
  selectedProductImage = '../../../assets/imgs/img5.png';
  selectedProductPrice = 0;

  constructor(
    private fb: FormBuilder,
    private ventaService: VentasService,
    private snackBar: MatSnackBar
  ) {}
  //Funcion que envia los datos ala page de estaditicas
  submit(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      const totalPrice = formData.quantity * formData.price;
      console.log(`Total price: ${totalPrice}`);
      this.ventaService.addVenta({ ...formData, price: totalPrice });
      this.form.reset();
      this.snackBar.open('Producto comprado exitosamente', 'Cerrar', {
        duration: 2000,
      });
    }
  }
  //Funcion para cambiar de imagen
  onProductChange(): void {
    const selectedProductId = this.form.get('product')?.value;
    const selectedProduct = this.products.find(
      (product) => product.id == selectedProductId
    );
    this.selectedProductImage = selectedProduct?.image || '';
    this.selectedProductPrice = selectedProduct?.price || 0;

    this.form.get('price')?.setValue(this.selectedProductPrice);
  }
}
