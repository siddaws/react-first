
export default function PostImage() {
    let imgSrc = '';

    function saveFormData(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (imgSrc) {
            URL.revokeObjectURL(imgSrc);
        }
        imgSrc = URL.createObjectURL(file!);
        document.documentElement.style.setProperty('--imgSrc', `url(${imgSrc})`);
    }

    return <>
        <label htmlFor="bgHomeImage">Зміна фону home</label>
        <input type="file" onChange={saveFormData} id="bgHomeImage" />
    </>
}