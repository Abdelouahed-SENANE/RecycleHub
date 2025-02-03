import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-form',
  imports: [RouterModule],
  template: `
    <form class="my-4 w-[390px]">
      <div class="form_control w-full  text-gray-300 my-4 relative">
        <span class="absolute top-[50%] translate-y-[-50%] left-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Fullname"
          class="pl-10  text-gray-500 focus:text-primary border-[3px] border-gray-100 focus:border-primary transition-colors ease-linear rounded-full placeholder:text-gray-300 w-full  outline-none  py-2 pr-2"
        />
      </div>

      <div class="form_control w-full  text-gray-300 my-4 relative">
        <span class="absolute top-[50%] translate-y-[-50%] left-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="bi bi-geo-alt"
            viewBox="0 0 16 16"
          >
            <path
              d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"
            />
            <path
              d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Address"
          class="pl-10  text-gray-500 focus:text-primary border-[3px] border-gray-100 focus:border-primary transition-colors ease-linear rounded-full placeholder:text-gray-300 w-full  outline-none  py-2 pr-2"
        />
      </div>

      <div class="form_control w-full  text-gray-300 my-4 relative">
        <span class="absolute top-[50%] translate-y-[-50%] left-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Email"
          class="pl-10  text-gray-500 focus:text-primary border-[3px] border-gray-100 focus:border-primary transition-colors ease-linear rounded-full placeholder:text-gray-300 w-full  outline-none  py-2 pr-2"
        />
      </div>
      <div class="form_control w-full text-gray-300 my-4 relative ">
        <span class="absolute top-[50%] translate-y-[-50%] left-3 focus-within:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="bi bi-calendar-date group-hover:text-primary transition-colors"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 1 4.5 5.5c-.993 0-1.538-.647-1.538-1.538v-.384c0-.99.677-1.538 1.762-1.538h6.633a12.6 12.6 0 0 1 1.538 1.538v.384c0 .89-.545 1.538-1.538 1.538a12.595 12.595 0 0 1-1.342.024l-.004-.012V6.354h-.633zm4.91-3.91c.004-.246.006-.492.006-.736s-.002-.49-.006-.736c-.41-.288-1.022-.436-1.66-.436-.993 0-1.538.647-1.538 1.538v.384c0 .99.677 1.538 1.762 1.538h6.633c.993 0 1.538-.647 1.538-1.538v-.384c0-.89-.545-1.538-1.538-1.538a12.595 12.595 0 0 0-1.342-.024z"
            />
            <path
              d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
            />
          </svg>
        </span>

        <!-- Input Field -->
        <input
          type="date"
          placeholder="Birthday"
          class="pl-10  text-gray-500 focus:text-primary border-[3px] border-gray-100 focus:border-primary transition-colors ease-linear rounded-full placeholder:text-gray-300 w-full  outline-none  py-2 pr-2"
          />
      </div>

   

      <div class="form_control w-full text-gray-300 relative">
        <span class="absolute top-[50%] translate-y-[-50%] left-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-shield-lock"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"
            />
            <path
              d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415"
            />
          </svg>
        </span>
        <input
          type="password"
          placeholder="Password"
          class="pl-10 rounded-full text-gray-500 placeholder:text-gray-300 w-full border-2 outline-none border-gray-200 py-2 "
        />
      </div>

      <div class="my-4">
        <button
          type="button"
          class="w-full cursor-pointer bg-primary text-white py-2 rounded-full font-semibold"
        >
          Register
        </button>
      </div>
      <div class="text-center">
        <span class="text-gray-500">Already have account ? </span>
        <a [routerLink]="['/auth/login']" class="text-primary font-bold">
          Sign In Now
        </a>
      </div>
    </form>
  `,

})
export class RegisterFormComponent {}
