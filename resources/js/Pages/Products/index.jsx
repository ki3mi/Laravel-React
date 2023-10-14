import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import Swal from 'sweetalert2';

export default function Products(props) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState('');
    const [operation, setOperation] = useState(1);
    const NameInput = useRef();
    const PriceInput = useRef();
    const StockInput = useRef();
    const ImgInput = useRef();
    const { data, setData, delete: destroy, post, put, processing, reset, errors } = useForm({
        id: '', name: '', price: '', stock: '', img: ''
    });
    const openModal = (op, id, name, price, stock, img) => {
        setModal(true);
        setOperation(op);
        setData({ name: '', price: '', stock: '', img: '' });
        if (op === 1) {
            setTitle('Añadir Producto');
        }
        else {
            setTitle('Mostrar Producto');
            setData({ id: id, name: name, price: price, stock: stock, img: img })
        }
    }
    const closeModal = () => {
        setModal(false);
    }
    const save = () => {

    }
    return (
        <AuthenticatedLayout
            user={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Productos</h2>}
        >
            <Head title="Productos" />

            <div className="bg-white grid v-screen place-items-center">
                <div className='mt-3 mb-3 flex justify-end'>
                    <PrimaryButton onClick={() => openModal(1)}>
                        Añadir
                    </PrimaryButton>
                </div>
                {/* tabla */}
                <div className='bg-white grid v-screen place-items-center py-6 rounded-lg p-4 mb-6 border border-gray-600'>
                    <table className='table-auto'>
                        <thead className='border border-white border-b-gray-600'>
                            <tr>
                                <th className='px-2 py-4'>#</th>
                                <th className='px-8 py-4'>Nombre</th>
                                <th className='px-8 py-4'>Precio</th>
                                <th className='px-8 py-4'>Stock</th>
                                <th className='px-8 py-4'>Imagen</th>
                                <th className='px-8 py-4'>Acción</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white'>
                            {props.products.map((prod, i) => (
                                <tr key={prod.id}>
                                    <td className='px-2 py-4'>{(i + 1)}</td>
                                    <td className='px-8 py-4'>{prod.name_product}</td>
                                    <td className='px-8 py-4'>S/.{prod.price_product}</td>
                                    <td className='px-8 py-4'>{prod.stock_product}</td>
                                    <td className='px-8 py-4'>{prod.img_product}</td>
                                    <td className='px-8 py-4'>
                                        <div className='flex'>
                                            <PrimaryButton className='mr-1' onClick={() => openModal(2, prod.id, prod.name_product, prod.price_product, prod.stock_product, prod.img_product)}>Editar</PrimaryButton>
                                            <DangerButton>Borrar</DangerButton>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal show={modal} onClose={closeModal}>
                <h2 className="p-3 text-lg font-medium text-gray-900">
                    {title}
                </h2>
                <form onSubmit={save} className="p-6">
                    {/* Nombre */}
                    <div className='mt-6'>
                        <InputLabel
                            htmlFor="name"
                            value="Nombre"
                            className='text-gray-900' />
                        <TextInput
                            id="name"
                            // name="name"
                            type="text"
                            ref={NameInput}
                            value={data.name}
                            required
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            className='mt-1 w-3/4' />
                        <InputError message={errors.name} classNamemt-2 />
                    </div>
                    {/* Precio */}
                    <div className='mt-6'>
                        <InputLabel
                            htmlFor="price"
                            value="Precio"
                            className='text-gray-900'
                        />

                        <TextInput
                            id="price"
                            // name="price"
                            type="number"
                            ref={PriceInput}
                            value={data.price}
                            required
                            handleChange={(e) => setData('price', e.target.value)}
                            className='mt-1 w-3/4'
                        />

                        <InputError message={errors.price} classNamemt-2 />
                    </div>
                    {/* Stock */}
                    <div className='mt-6'>
                        <InputLabel
                            htmlFor="stock"
                            value="Stock"
                            className='text-gray-900' />
                        <TextInput
                            id="stock"
                            name="stock"
                            type="number"
                            ref={StockInput}
                            value={data.stock}
                            required
                            handleChange={(e) => setData('stock', e.target.value)}
                            className='mt-1 w-3/4' />
                        <InputError
                            message={errors.stock}
                            classNamemt-2 />
                    </div>
                    {/* Imagen */}
                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}