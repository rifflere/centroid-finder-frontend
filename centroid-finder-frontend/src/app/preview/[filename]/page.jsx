export default function PreviewPage({children}){
    const { filename } = params;
    
    return (
        <div style={{ border: '2px solid', borderColor: 'gold' }}>
            <h1>Previewing: {filename}</h1>
            <p>This is the preview page for the selected video.</p>
        </div>
    );
}