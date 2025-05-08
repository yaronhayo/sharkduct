
import React, { useState } from 'react';

interface S3ImageTestProps {
  bucketUrl: string;
  imagePath: string;
}

const S3ImageTest: React.FC<S3ImageTestProps> = ({ bucketUrl, imagePath }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const imageUrl = `${bucketUrl}/${imagePath}`;
  
  const handleImageLoad = () => {
    console.log('S3 image loaded successfully');
    setImageLoaded(true);
    setError(null);
  };
  
  const handleImageError = () => {
    console.error('Failed to load S3 image:', imageUrl);
    setImageLoaded(false);
    setError(`Failed to load image from ${imageUrl}. Check browser console for more details.`);
  };
  
  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <h3 className="text-lg font-medium mb-2">Amazon S3 Image Test</h3>
      <p className="text-sm text-gray-600 mb-4">Testing access to: {imageUrl}</p>
      
      <div className="relative min-h-[200px] bg-gray-100 flex items-center justify-center rounded border">
        {!imageLoaded && !error && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-shark-blue"></div>
          </div>
        )}
        
        <img 
          src={imageUrl} 
          alt="S3 test" 
          className="max-w-full max-h-[300px] object-contain"
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: error ? 'none' : 'block' }}
        />
        
        {error && (
          <div className="text-center p-4 text-red-600">
            <svg className="w-12 h-12 mx-auto text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="mt-2">{error}</p>
            <p className="text-sm text-gray-500 mt-2">
              This could be due to CORS restrictions, missing file, or Content Security Policy issues.
            </p>
          </div>
        )}
      </div>
      
      <div className="mt-4 p-3 bg-white rounded border">
        <p className="text-sm font-medium">Status: {imageLoaded ? '✅ Loaded' : error ? '❌ Error' : '⏳ Loading...'}</p>
      </div>
    </div>
  );
};

export default S3ImageTest;
