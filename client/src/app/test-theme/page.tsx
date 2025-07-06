'use client';

export default function TestThemePage() {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <h1 className="text-3xl font-bold mb-8">Theme Tester</h1>
      
      <div className="grid gap-6">
        <div className="card bg-base-200 p-6">
          <h2 className="text-2xl font-semibold mb-4">Card Title</h2>
          <p>This is a test card to demonstrate the current theme.</p>
          <div className="mt-4">
            <button className="btn btn-primary mr-2">Primary Button</button>
            <button className="btn btn-secondary mr-2">Secondary Button</button>
            <button className="btn btn-accent">Accent Button</button>
          </div>
        </div>
        
        <div className="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>This is an info alert to test the theme colors.</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card bg-base-200 p-4">
            <h3 className="font-semibold mb-2">Form Elements</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Type here" className="input input-bordered w-full" />
              <select className="select select-bordered w-full">
                <option disabled selected>Pick one</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Remember me</span>
                  <input type="checkbox" className="toggle" />
                </label>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-200 p-4">
            <h3 className="font-semibold mb-2">Alerts</h3>
            <div className="space-y-2">
              <div className="alert alert-success">
                <span>Success alert</span>
              </div>
              <div className="alert alert-warning">
                <span>Warning alert</span>
              </div>
              <div className="alert alert-error">
                <span>Error alert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
