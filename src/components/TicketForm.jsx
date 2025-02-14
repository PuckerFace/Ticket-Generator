import { useEffect, useState } from 'react';
import envelope from '../assets/images/envelope.svg';
import cloud from '../assets/images/cloud.svg';
import loader from '../assets/images/loader.svg';

import { useNavigate } from 'react-router-dom';

const TicketForm = () => {
  const selectedData = JSON.parse(localStorage.getItem('selectedData')) || {
    access: 'free',
    tickets: 1,
  };
  const savedFormData = JSON.parse(localStorage.getItem('formData')) || {
    name: '',
    email: '',
    message: '',
  };
  const [formData, setFormData] = useState(savedFormData);
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [url, setUrl] = useState(null);
  const [displayAvater, setDisplayAvater] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);
  const handleUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;
    setLoading(true);
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'ticket_avater');
    data.append('cloud_name', 'dsvqm8iyp');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dsvqm8iyp/image/upload',
      {
        method: 'post',
        body: data,
      }
    );

    const uploadUrl = await res.json();

    setUrl(uploadUrl.url);
    console.log(uploadUrl.url);
    setDisplayAvater(true);
    setLoading(false);
  };
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (!url) {
      newErrors.url = 'Avatar URL is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    if (e.code === 'Enter' || e.type === 'submit') {
      e.preventDefault();
      const formErrors = validateForm();
      if (Object.keys(formErrors).length === 0) {
        const userData = { ...selectedData, ...formData };
        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('userUrl', JSON.stringify(url));

        navigate('/ticket');
      } else {
        setErrors(formErrors);
      }
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleSubmit);

    return () => {
      document.removeEventListener('keydown', handleSubmit);
    };
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleBack = () => {
    navigate('/');
  };

  return (
    <section className="flex flex-col justify-center w-[350px] sm:w-[375px]  md:w-[700px] p-12 gap-8 rounded-[40px] border-2 border-[#0E464F] bg-[#041E23] font-[JejuMyeongjo] font-normal text-white ">
      <div className="flex  justify-between items-start  md:items-center gap-5 md:flex-row flex-col ">
        <h1 className="text-white text-2xl md:text-[32px] font-normal ">
          Attendee Details
        </h1>
        <p className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
          Step 2/3
        </p>
      </div>
      <div className="flex">
        <span className="w-1/2 bg-[#24A0B5] h-1.5 rounded-2xl "></span>
        <span className="bg-[#0E464F] w-1/2 h-1.5 rounded-r-2xl "></span>
      </div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="w-[556px] h-[328px] px-6 pt-6 pb-12 bg-[#042127] rounded-3xl border border-[#07363e] flex-col justify-start items-start gap-8 inline-flex">
          <div className="text-center text-color-grey-98 text-base font-normal font-['Roboto'] leading-normal">
            Upload Profile Photo
          </div>

          <div className="self-stretch h-[200px] bg-transparent md:bg-black/20 justify-center items-center gap-2.5 inline-flex">
            {displayAvater ? (
              <div
                className="relative w-60 h-60 bg-[#0e464e] rounded-[32px] border-4 border-[#23a0b5]/50"
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
              >
                <img
                  src={url}
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-[32px]"
                />
                {isHovered && (
                  <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 bg-[#000000]/40 rounded-[32px]">
                    <div className="relative">
                      <img src={loading ? loader : cloud} alt="" />
                    </div>
                    <div className="text-center text-color-grey-98 text-base font-normal font-['Roboto'] leading-normal">
                      <label htmlFor="file" className="cursor-pointer">
                        Drag & drop or click to upload
                      </label>
                      <input
                        type="file"
                        id="file"
                        name="file"
                        className="hidden"
                        onChange={handleUpload}
                      />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div
                className={`w-60 h-60 p-6 mb-5 md:mb-2 bg-[#0e464e] rounded-[32px] border-4 ${
                  errors.url ? 'border-red-700' : 'border-[#23a0b5]/50'
                }   flex-col justify-center items-center gap-4 inline-flex`}
              >
                <label
                  htmlFor="file"
                  className="self-stretch flex flex-col gap-3 items-center text-center text-color-grey-98 text-base font-normal font-['Roboto'] leading-normal"
                >
                  <div className="relative">
                    <img src={loading ? loader : cloud} alt="" />
                  </div>
                  Drag & drop or click to upload
                  <input
                    type="file"
                    id="file"
                    name="file"
                    className="hidden"
                    onChange={handleUpload}
                  />
                </label>
              </div>
            )}
          </div>
        </div>
        {errors.url && (
          <p className="text-red-500 text-sm mt-1">{errors.url}</p>
        )}
        <hr className="border-2 border-[#07373F] " />
        <label
          htmlFor="name"
          className="text-color-grey-98 text-base font-normal font-['Roboto'] leading-normal"
        >
          Enter your name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className={`h-12 p-3 rounded-xl border ${
            errors.name ? 'border-red-700' : 'border-[#07363e]'
          }  justify-start items-center gap-2 inline-flex outline-0`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
        <label
          htmlFor="email"
          className="text-color-grey-98 text-base font-normal font-['Roboto'] leading-normal"
        >
          Enter your email *
        </label>
        <div
          className={`h-12 p-3 rounded-xl border ${
            errors.email ? 'border-red-700' : 'border-[#07363e]'
          }  justify-start items-center gap-2 inline-flex`}
        >
          <img src={envelope} alt="" />
          <input
            type="email"
            name="email"
            id="email"
            className="w-full outline-0"
            value={formData.email}
            placeholder="hello@avioflagos.io"
            onChange={handleChange}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
        <label
          htmlFor=""
          className="text-color-grey-98 text-base font-normal font-['Roboto'] leading-normal"
        >
          Special request?
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          className="h-[127px] p-3 rounded-xl border border-[#07363e]"
          placeholder="Textarea"
          onChange={handleChange}
        ></textarea>
        <div className="flex gap-4 pt-6 md:flex-row flex-col">
          <button
            className="h-12 px-6 py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 inline-flex overflow-hidden w-full order-2 md:order-1"
            onClick={handleBack}
          >
            <p className="text-[#23a0b5] text-base font-normal font-['JejuMyeongjo'] leading-normal">
              Cancel
            </p>
          </button>
          <button
            className="h-12 px-6 py-3 bg-[#23a0b5] rounded-lg justify-center items-center gap-2 inline-flex overflow-hidden w-full order-1 md:order-2"
            type="submit"
          >
            <p className="text-white text-base font-normal font-['JejuMyeongjo'] leading-normal">
              Get My Free Ticket
            </p>
          </button>
        </div>
      </form>
    </section>
  );
};

export default TicketForm;
