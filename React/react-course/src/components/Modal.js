function Modal(props) {
    
    function cancelItem() {
        props.onCancel();
    }

    function confirmItem() {
        props.onConfirm();
    }

    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={cancelItem}>Cancel</button>
            <button className="btn" onClick={confirmItem}>Confirm</button>
        </div>
    );
}


export default Modal;